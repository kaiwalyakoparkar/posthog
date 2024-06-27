import { expect, test } from '@playwright/test'
import { urls } from 'scenes/urls'

import { InsightType } from '~/types'

import { ToastObject } from '../shared/toastObject'
import { InsightPage } from './insightPage'

test('can create insight', async ({ page }) => {
    const insight = new InsightPage(page)
    const toast = new ToastObject(page)

    // name field displays 'Unnamed' before save
    await page.goto(urls.insightNew())
    await expect(insight.topBarName, 'has no name').toContainText('Unnamed')

    // save the insight
    await insight.save()

    // name field displays 'Pageview count' after save
    await insight.withReload(
        async () => {
            await expect(insight.topBarName, 'sets name').toContainText('Pageview count')
        },
        async () => {
            await expect(toast.container, 'displays toast').toContainText('Insight saved')
        }
    )
})

test('can edit insight query', async ({ page }) => {
    const insight = await new InsightPage(page).createNew()

    // add an autocapture series
    await insight.withEdit(async () => {
        await insight.addEntityButton.click()
        await insight.secondEntity.click()
        await page.getByText('Autocapture').click()
    })

    // labels in details table match
    await insight.withReload(async () => {
        await insight.waitForDetailsTable()

        // test series labels
        const labels = await insight.detailsLabels.allInnerTexts()
        expect(labels).toEqual(['Pageview', 'Autocapture'])
    })
})

test('can edit insight metadata', async ({ page }) => {
    const insight = await new InsightPage(page).createNew()
    const toast = new ToastObject(page)

    await insight.editName('new name')

    await insight.withReload(
        async () => {
            await expect(insight.topBarName).toContainText('new name')
        },
        async () => {
            await expect(toast.container, 'displays toast').toContainText('Updated insight')
        }
    )
})

test('can undo insight metadata edit', async ({ page }) => {
    const insight = await new InsightPage(page).createNew(InsightType.TRENDS, 'old name')
    const toast = new ToastObject(page)

    await insight.editName('new name')
    await toast.undo()

    await insight.withReload(
        async () => {
            await expect(insight.topBarName).toContainText('old name')
        },
        async () => {
            await expect(toast.container, 'displays toast').toContainText('Insight change reverted')
        }
    )
})

test('can edit insight query by source', async ({ page }) => {
    const insight = await new InsightPage(page).createNew()

    const queryText =
        '{"kind":"InsightVizNode","source":{"kind":"TrendsQuery","filterTestAccounts":false,"series":[{"kind":"EventsNode","event":"$pageview","name":"$pageview","math":"total"},{"kind":"EventsNode","event":"$autocapture","name":"$autocapture","math":"total"}],"interval":"day","trendsFilter":{"display":"ActionsLineGraph"}},"full":true}'
    await insight.openSourceEditor()
    await insight.changeQuerySource(queryText)

    await insight.save()

    // labels in details table match
    await insight.withReload(async () => {
        await insight.waitForDetailsTable()

        // test series labels
        const labels = await insight.detailsLabels.allInnerTexts()
        expect(labels).toEqual(['Pageview', 'Autocapture'])
    })
})

test("can't save unchanged insight", async ({ page }) => {
    const insight = await new InsightPage(page).createNew()

    await insight.edit()

    await expect(insight.saveButton).toBeDisabled()
})

test(' requires confirmation to navigate away from changed insight', async ({ page }) => {
    const insight = await new InsightPage(page).createNew()

    // add an autocapture series
    await insight.edit()
    // :FIXME: Reload shouldn't be necessary to trigger the confirmation dialog
    await page.reload()
    await insight.waitForDetailsTable()
    // END FIXME
    await insight.addEntityButton.click()
    await insight.secondEntity.click()
    await page.getByText('Autocapture').click()

    await page.getByRole('link', { name: 'Home' }).click()

    // page.on('dialog', (dialog) => {
    //     expect(dialog.message).toEqual('a')
    //     dialog.dismiss()
    // })
    let dialogMessage = null
    page.on('dialog', async (dialog) => {
        dialogMessage = dialog.message()
        await dialog.accept() // Accept the dialog to continue the test
    })

    expect(dialogMessage).toEqual('s')

    await expect(insight.saveButton).toBeDisabled()
})
