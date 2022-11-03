import { getCurrentTab } from '../../utils'

chrome.tabs.onActivated.addListener(async () => {
  const currentTab = await getCurrentTab()
  console.log(currentTab)
})
