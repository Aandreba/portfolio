export type AutoPlayVideoProps = {
    src: string
}

export default function AutoPlayVideo(props: AutoPlayVideoProps) {
    return (<video src={props.src} autoplay loop muted disablepictureinpicture disableremoteplayback x-webkit-airplay="deny"></video>)
}
