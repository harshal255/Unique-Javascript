// Function to open the link in a new tab/window
export const openLink = (link) => {
    console.log("Open ")
    window.open(link, 'targetWindow', 'scrollbars=yes,resizable=yes,width=1000,height=600')
}