import React from 'react'
import PropTypes from 'prop-types'
import { FaTelegram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa'

const icons = {
  telegram: {
    component: FaTelegram,
    name: 'کانال تلگرام'
  },
  instagram: {
    component: FaInstagram,
    name: 'صفحه اینستاگرام'
  },
  linkedin: {
    component: FaLinkedin,
    name: 'صفحه لینکداین'
  },
  web: {
    component: FaLink,
    name: 'آدرس وب‌سایت'
  },

}

export default function LinkIcon(props) {
  const { icon, url } = props;
  const Icon = icons[icon].component;
  const name = icons[icon].name;

  return (
    <div className="link-icon">
      <Icon />
      <a href={url} title={name} target="_blank" rel="noopener noreferrer">{name}</a>
    </div>
  )
}

LinkIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

