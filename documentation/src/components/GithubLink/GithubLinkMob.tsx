import React, { FC, useState, useEffect } from 'react'
import { getLatestTag } from '@site/src/api/getRepoInfo'

export const GithubLinkMob: FC = () => {
  const [tag, setTag] = useState<string>()

  useEffect(() => {
    getLatestTag()
      .then(data => setTag(data))
      /* eslint-disable-next-line no-console */
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <a
        className="menu__link header-github-link header-github-link-mob"
        href="https://github.com/PRO-Robotech/b-cloud-docs"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub repository"
      >
        H-BF/sgroups
      </a>
      <ul className="github-facts github-facts-mob">
        {tag && <li className="github-fact github-fact--version">{tag}</li>}
      </ul>
    </>
  )
}