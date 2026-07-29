import { createSignal, onCleanup, onMount, Show } from "solid-js";
import { Portal } from "solid-js/web";

export type AutoPlayVideoProps = {
    src: string;
};

export default function AutoPlayVideo(props: AutoPlayVideoProps) {
    const [expanded, setExpanded] = createSignal<number | null>(null);
    const close = () => setExpanded(null);

    return (
        <>
            <video
                src={props.src}
                autoplay
                loop
                muted
                playsinline
                disablepictureinpicture
                disableremoteplayback
                x-webkit-airplay="deny"
                width="100%"
                style={"cursor: pointer;"}
                onClick={(e) => setExpanded(e.currentTarget.currentTime)}
                onKeyDown={(e: KeyboardEvent) => {
                    if (e.key === "Escape") close();
                }}
            />

            <Show when={expanded() !== null}>
                <Portal>
                    <div class="ev-overlay" onClick={close}>
                        <button
                            class="ev-close"
                            onClick={close}
                            aria-label="Close video"
                        >
                            ✕
                        </button>
                        <video
                            class="ev-full"
                            src={`${props.src}#t=${expanded()}`}
                            autoplay
                            controls
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </Portal>
            </Show>
        </>
    );
}
