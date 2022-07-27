import { useQuery } from 'react-query'

export type MediumPublication = {
  imageUrl: string
  title: string
  content: string
  author?: string
  from?: string
  date: string
  link: string
}

export const useBankseaMediumPublicationsQuery = () => {
  return useQuery(
    ['BANKSEA_MEDIUM_PUBLICATIONS'],
    async () => {
      const json = await (await fetch('https://api.allorigins.win/get?url=https://medium.com/@BankseaFinance/feed')).json()
      const { contents } = json

      const dom = new window.DOMParser().parseFromString(contents, 'text/xml')
      const items = dom.querySelectorAll('item')

      return [...items].map(item => {
        const pubDate = item.querySelector('pubDate')!.textContent!
        const encoded = item.querySelector('encoded')!.textContent!
        const encodedDom = new window.DOMParser().parseFromString(encoded, 'text/html')

        return {
          content: encoded.replace(/<[^>]+>/g, '').slice(0, 200),
          date: pubDate.slice(pubDate.indexOf(', ') + 2, pubDate.length - 13),
          imageUrl: encodedDom.querySelector('img')!.getAttribute('src')!,
          title: item.querySelector('title')!.textContent!,
          link: item.querySelector('link')!.textContent!
        }
      }).slice(0, 3)
    }
  )
}
