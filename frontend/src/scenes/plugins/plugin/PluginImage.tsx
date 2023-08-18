import { parseGithubRepoURL } from 'lib/utils'
import { useEffect, useState } from 'react'
import imgPluginDefault from 'public/plugin-default.svg'
import { PluginType } from '~/types'
import { IconTerminal } from 'lib/lemon-ui/icons'

export function PluginImage({
    plugin,
    size = 'medium',
}: {
    plugin: Partial<Pick<PluginType, 'plugin_type' | 'url' | 'icon'>>
    size?: 'medium' | 'large'
}): JSX.Element {
    const { plugin_type: pluginType, url, icon } = plugin
    const [state, setState] = useState({ image: imgPluginDefault })
    const pixelSize = size === 'large' ? 100 : 60

    useEffect(() => {
        if (icon) {
            setState((state) => ({ ...state, image: icon }))
        } else if (url?.includes('github.com')) {
            const { user, repo, path } = parseGithubRepoURL(url)

            setState({
                ...state,
                image: `https://raw.githubusercontent.com/${user}/${repo}/${path || 'main'}/logo.png`,
            })
        }
    }, [url])

    return pluginType === 'source' ? (
        <IconTerminal
            className="plugin-image shrink-0"
            style={{
                fontSize: pixelSize,
            }}
        />
    ) : (
        <div
            className="plugin-image shrink-0"
            style={{
                width: pixelSize,
                height: pixelSize,
                backgroundImage: `url(${state.image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            }}
            // eslint-disable-next-line react/no-unknown-property
            onError={() => setState({ ...state, image: imgPluginDefault })}
        />
    )
}
