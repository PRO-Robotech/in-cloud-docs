import React, { FC, useState, useEffect } from 'react'
import { getLatestTag, getStarsAndForks } from '@site/src/api/getRepoInfo'

export const GithubLink: FC = () => {
  const [tag, setTag] = useState<string>()
  const [stars, setStars] = useState<number>()
  const [forks, setForks] = useState<number>()

  useEffect(() => {
    getLatestTag()
      .then(data => setTag(data))
      /* eslint-disable-next-line no-console */
      .catch(err => console.log(err))
    getStarsAndForks()
      .then(({ stars, forks }) => {
        setStars(stars)
        setForks(forks)
      })
      /* eslint-disable-next-line no-console */
      .catch(err => console.log(err))
  }, [])

  return (
    <a
      href={process.env.Docusaurus_GIT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="navbar__item navbar__link header-github-link"
      aria-label="GitHub repository"
    >
      in-cloud-docs
      <svg
        width="13.5"
        height="13.5"
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"
      >
        <path
          fill="currentColor"
          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
        />
      </svg>
      <ul className="github-facts">
        {tag && <li className="github-fact github-fact--version">{tag}</li>}
        {stars !== null && <li className="github-fact github-fact--stars">{stars}</li>}
        {forks !== null && <li className="github-fact github-fact--forks">{forks}</li>}
      </ul>
    </a>
  )
}
