export type AutoPlayVideoProps = {
    src: string
}

export default function AutoPlayVideo(props: AutoPlayVideoProps) {
    return (<video src={props.src} autoplay loop muted playsinline disablepictureinpicture disableremoteplayback x-webkit-airplay="deny" width="100%"></video>)
}
