import React from 'react'
import LinkItem from './LinkItem';


export default function LinkList() {
    const links = [
        { title: 'Help' },
        { title: 'Contact' },
        { title: 'Fees' },
        { title: 'Security' },
        { title: 'Apps' },
        { title: 'About' },
        { title: 'Newsroom' },
        { title: 'Jobs' },
        { title: 'Investor Relations' },
        { title: 'Public Policy' },
        { title: 'Sitemap' },
      ];
    
  return (
    <div>
      <ul className="flex flex-wrap -mb-px text-sm">
      {links.map((link, index) => (
        <LinkItem key={index} title={link.title} />
      ))}
    </ul>
    </div>
  )
}
