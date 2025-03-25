import axios from 'axios'

export const getLatestTag = (): Promise<string | null> => {
  return axios
    .get<{ name: string }[]>('https://api.github.com/repos/PRO-Robotech/b-cloud-docs/tags')
    .then(({ data }) => {
      return data[0].name
    })
    .catch(error => {
      /* eslint-disable-next-line no-console */
      console.log(error)
      return null
    })
}

export const getStarsAndForks = (): Promise<{ stars: number; forks: number } | null> => {
  return axios
    .get<{ stargazers_count: number; forks: number }>('https://api.github.com/repos/PRO-Robotech/b-cloud-docs')
    .then(({ data }) => {
      return {
        stars: data.stargazers_count,
        forks: data.forks,
      }
    })
    .catch(error => {
      /* eslint-disable-next-line no-console */
      console.log(error)
      return null
    })
}