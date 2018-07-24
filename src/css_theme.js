// import styled from 'styled-components'
import React from 'react';
import styled from 'styled-components'
import buttonNormal from './components/Images/nav_images/Normal.png'
import './css_theme.css'


// http://colorpalettes.net/color-palette-2085
const mainTheme = {
    primaryYellow: "#fdd000",
    primaryGray: "#5d6d7c",
    primaryBlack: "#000000",
    primaryWhite: "#f2efe2",
    fontFamily: "Roboto sans-serif"
}

// Font Roboto


// H1 font size
// Text box font size

// Disabled color?







export function IconChat(props) {
    const chatfill = props.chatfill || mainTheme.primaryYellow
    return (
        <div className="image-container-chat">
            <img src={buttonNormal} />

            <div className="IconChat">
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32">
                    <title>Chat</title>
                    <desc>Chat Icon</desc>
                    <g fill="none">
                        <g fill={chatfill}>
                            <path d="M29.2343313 19.161523C28.9724551 18.5202405 28.2506986 18.2124248 27.611976 18.4689379 26.9732535 18.7318637 26.6666667 19.456513 26.9221557 20.0977956L28.3912176 23.7402806 24.0351297 21.8164329C23.7157685 21.6753507 23.3580838 21.6689379 23.0451098 21.81002 21.5568862 22.4448898 19.9600798 22.7655311 18.3057884 22.7655311 11.637525 22.7655311 7.16007984 17.5262525 7.16007984 12.6332665 7.16007984 7.04769539 12.1612774 2.501002 18.3057884 2.501002 24.4502994 2.501002 29.4451098 7.04769539 29.4451098 12.6332665 29.4451098 13.0693387 29.4067864 13.5951904 29.3365269 14.0633267 29.2343313 14.749499 29.706986 15.3843687 30.3840319 15.4869739 31.0674651 15.5895792 31.6998004 15.1150301 31.801996 14.4352705 31.8914172 13.8388778 31.9361277 13.1975952 31.9361277 12.6332665 31.9361277 9.24088176 30.5053892 6.05370741 27.9057884 3.66172345 25.3317365 1.30180361 21.9273453 0 18.3057884 0 14.6842315 0 11.2734531 1.30180361 8.70578842 3.66172345 6.38083832 5.79719439 4.98842315 8.56753507 4.72015968 11.5559118 1.79481038 13.498998 0.0638722555 16.6156313 0.0638722555 19.9695391 0.0638722555 22.0665331 0.721756487 24.054509 1.97365269 25.7667335L0.153293413 30.2813627C-0.0383233533 30.7559118 0.0766467066 31.2945892 0.440718563 31.6472946 0.677045908 31.8781563 0.99001996 32 1.30938124 32 1.48183633 32 1.64790419 31.9679359 1.81397206 31.8973948L7.05788423 29.5759519C8.37365269 30.0697395 9.76606786 30.3198397 11.2095808 30.3198397 11.241517 30.3198397 11.2670659 30.3134269 11.299002 30.3134269 13.3812375 30.2941884 15.405988 29.7490982 17.1560878 28.7166333 18.7273453 27.7995992 20.0175649 26.5298597 20.9245509 25.0356713 21.805988 24.8753507 22.6746507 24.6380762 23.5113772 24.311022L30.1924152 27.2673347C30.3520958 27.3442886 30.5245509 27.3763527 30.6906188 27.3763527 31.00998 27.3763527 31.3229541 27.254509 31.5592814 27.0236473 31.9233533 26.6709419 32.0383234 26.1322645 31.8467066 25.6577154L29.2343313 19.161523ZM11.2095808 27.8124248C11.1904192 27.8124248 11.1712575 27.8188377 11.158483 27.8188377 9.88742515 27.8124248 8.66107784 27.5559118 7.51776447 27.0685371 7.20479042 26.9338677 6.84071856 26.9338677 6.52774451 27.0749499L3.61516966 28.3639279 4.55409182 26.0296593C4.72654691 25.6 4.6499002 25.1062124 4.34331337 24.753507 3.1744511 23.3683367 2.55489022 21.7138277 2.55489022 19.9695391 2.55489022 17.9751503 3.39161677 16.0833667 4.85429142 14.6468938 5.31417166 17.141483 6.59800399 19.5270541 8.53972056 21.406012 10.9540918 23.7338677 14.1477046 25.0869739 17.5968064 25.2537074 15.9744511 26.850501 13.6622754 27.8124248 11.2095808 27.8124248Z" id="Shape" />
                            <ellipse id="Oval" cx="18.2419162" cy="12.690982" rx="1.24550898" ry="1.250501" />
                            <ellipse id="Oval" cx="23.2239521" cy="12.690982" rx="1.24550898" ry="1.250501" />
                            <ellipse id="Oval" cx="13.2598802" cy="12.690982" rx="1.24550898" ry="1.250501" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export function IconMenu(props) {
    const menufill = props.menufill || mainTheme.primaryYellow
    return (
        <div className="image-container-menu">
            <img src={buttonNormal} />

            <div className="IconMenu">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32">
                    <title>Menu</title>
                    <desc>Hamburger Menu Icon</desc>
                    <g fill="none">
                        <polygon points="0 0 32 0 32 32 0 32" />
                        <g fill={menufill}>
                            <path d="M0.032 16L24.032 16 24.032 13.3312 0.032 13.3312 0.032 16ZM0.032 9.3312L24.032 9.3312 24.032 6.6688 0.032 6.6688 0.032 9.3312ZM0.032 0L0.032 2.6688 24.032 2.6688 24.032 0 0.032 0Z" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export function IconSchedule(props) {
    const schedulefill = props.schedulefill || mainTheme.primaryYellow
    return (
        <div className="image-container-schedule">
            <img src={buttonNormal} />

            <div className="IconSchedule">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32">
                    <title>Schedule</title>
                    <desc>Schedule Icon</desc>
                    <g fill={schedulefill}>
                        <path d="M27.0016 2.5024L25.376 2.5024 25.376 1.248C25.376 0.5568 24.8128 0 24.128 0 23.4368 0 22.8736 0.5568 22.8736 1.248L22.8736 2.5024 17.1904 2.5024 17.1904 1.248C17.1904 0.5568 16.6272 0 15.936 0 15.2448 0 14.688 0.5568 14.688 1.248L14.688 2.5024 9.0624 2.5024 9.0624 1.248C9.0624 0.5568 8.5056 0 7.8144 0 7.1232 0 6.56 0.5568 6.56 1.248L6.56 2.5024 4.9984 2.5024C2.24 2.5024 0 4.7424 0 7.5008L0 27.0016C0 29.76 2.24 32 4.9984 32L14.56 32C15.2512 32 15.8144 31.4432 15.8144 30.752 15.8144 30.0608 15.2512 29.4976 14.56 29.4976L4.9984 29.4976C3.6224 29.4976 2.5024 28.3776 2.5024 27.0016L2.5024 7.5008C2.5024 6.1184 3.6224 4.9984 4.9984 4.9984L6.56 4.9984 6.56 6.2528C6.56 6.9376 7.1232 7.5008 7.8144 7.5008 8.5056 7.5008 9.0624 6.9376 9.0624 6.2528L9.0624 4.9984 14.688 4.9984 14.688 6.2528C14.688 6.9376 15.2448 7.5008 15.936 7.5008 16.6272 7.5008 17.1904 6.9376 17.1904 6.2528L17.1904 4.9984 22.8736 4.9984 22.8736 6.2528C22.8736 6.9376 23.4368 7.5008 24.128 7.5008 24.8128 7.5008 25.376 6.9376 25.376 6.2528L25.376 4.9984 27.0016 4.9984C28.3776 4.9984 29.4976 6.1184 29.4976 7.5008L29.4976 14.624C29.4976 15.3152 30.0608 15.872 30.752 15.872 31.4432 15.872 32 15.3152 32 14.624L32 7.5008C32 4.7424 29.76 2.5024 27.0016 2.5024Z" id="Shape" />
                        <path d="M24.4352 16.8768C20.2688 16.8768 16.8768 20.2688 16.8768 24.4352 16.8768 28.608 20.2688 32 24.4352 32 28.608 32 32 28.608 32 24.4352 32 20.2688 28.608 16.8768 24.4352 16.8768ZM24.4352 29.4976C21.6448 29.4976 19.3728 27.232 19.3728 24.4352 19.3728 21.6448 21.6448 19.3728 24.4352 19.3728 27.232 19.3728 29.4976 21.6448 29.4976 24.4352 29.4976 27.232 27.232 29.4976 24.4352 29.4976Z" id="Shape" />
                        <path d="M26.2528 23.1872L25.6896 23.1872 25.6896 21.8752C25.6896 21.184 25.1264 20.6272 24.4352 20.6272 23.744 20.6272 23.1872 21.184 23.1872 21.8752L23.1872 24.4352C23.1872 25.1264 23.744 25.6896 24.4352 25.6896L26.2528 25.6896C26.9376 25.6896 27.5008 25.1264 27.5008 24.4352 27.5008 23.744 26.9376 23.1872 26.2528 23.1872Z" id="Shape" />
                        <circle id="Oval" cx="24.128" cy="13.1264" r="1.248" />
                        <circle id="Oval" cx="18.688" cy="13.1264" r="1.248" />
                        <circle id="Oval" cx="13.248" cy="18.56" r="1.248" />
                        <circle id="Oval" cx="7.8144" cy="13.1264" r="1.248" />
                        <circle id="Oval" cx="7.8144" cy="18.56" r="1.248" />
                        <circle id="Oval" cx="7.8144" cy="24" r="1.248" />
                        <circle id="Oval" cx="13.248" cy="24" r="1.248" />
                        <circle id="Oval" cx="13.248" cy="13.1264" r="1.248" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export function IconSearch(props) {
    const searchfill = props.searchfill || mainTheme.primaryYellow
    return (
        <div className="image-container-search">
            <img src={buttonNormal} />

            <div className="IconSearch">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32">
                    <title>Search</title>
                    <desc>Search Icon</desc>
                    <g fill="none">
                        <path fill={searchfill} d="M22.7322034 19.9864407L21.3220339 19.9864407 20.820339 19.5050847C22.5694915 17.4711864 23.620339 14.8271186 23.620339 11.959322 23.620339 5.55254237 18.4271186 0.359322034 12.0271186 0.359322034 5.62033898 0.359322034 0.427118644 5.55254237 0.427118644 11.959322 0.427118644 18.359322 5.62033898 23.5525424 12.0271186 23.5525424 14.8949153 23.5525424 17.5389831 22.5016949 19.5728814 20.7525424L20.0542373 21.2542373 20.0542373 22.6644068 28.9762712 31.5661017 31.6338983 28.9084746 22.7322034 19.9864407ZM12.0271186 19.9864407C7.57966102 19.9864407 3.99322034 16.4 3.99322034 11.959322 3.99322034 7.51186441 7.57966102 3.92542373 12.0271186 3.92542373 16.4677966 3.92542373 20.0542373 7.51186441 20.0542373 11.959322 20.0542373 16.4 16.4677966 19.9864407 12.0271186 19.9864407Z" />
                        <polygon points="0 0 32 0 32 32 0 32" />
                    </g>
                </svg>
            </div>
        </div>
    )
}


export default mainTheme