import { makeRequest } from "../requests";
import { addStartingZero } from '../../helpers/addStringZero'

export const getTrandings = (lang = 'javascript') => {
    const params = new URLSearchParams()
    const weekMS = 7 * 24 * 60 * 60
    const weekAgo = new Date(Date.now() - weekMS)

    const formatDate = [ 
        weekAgo.getFullYear(),
        addStartingZero(weekAgo.getMonth() + 1),
        addStartingZero(weekAgo.getDate())
    ].join('-')

    params.append('order', 'decs')
    params.append('sort', 'stars')
    params.append('per_page', 10)
    // params.append('q', `language:${lang} created:>${formatDate}`)  // по текущей дате приходит пустой массив
    params.append('q', `language:${lang} created:>2021-01-01`)

    return makeRequest({
        url: `/search/repositories?${params}`
    })
}