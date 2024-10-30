import React, { FC } from 'react'
import { TTerminology } from '@site/src/customTypes/terminology'

export const Terminology: FC<{ data: TTerminology[] }> = ({ data }) => {
  return (
    <>
      {data.map(({ name, comment, definition, link }) => (
        <div key={name} className="text-justify">
          <b>{name}</b>
          {comment && <i>({comment})</i>}
          {' - '}
          {definition}
          {link && <a href={link}> Подробнее...</a>}
          <br />
          <br />
        </div>
      ))}
    </>
  )
}
