import { getYouTubeVideoId } from '@bitwhys/utils'
import { getCurrentTab } from '../../utils'

import '@fontsource/lexend/variable.css'
import './tailwind.css'

const TEST_YOUTUBE_VIDEO_URL = 'https://www.youtube.com/watch?v=vIA10kmNXwU'
const trigger = document.querySelector('#trigger')
const title = document.querySelector('#title')

const handleClick = clickEvent => {
  clickEvent.preventDefault()
  const videoId = getYouTubeVideoId(TEST_YOUTUBE_VIDEO_URL)
  title.innerText = videoId
  getCurrentTab().then(tab => {
    console.log(`Tab: `, tab)
  })
}

trigger.addEventListener('click', handleClick)
