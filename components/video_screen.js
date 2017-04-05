const src = `${CMWN.MEDIA.VIDEO}sea-turtle.mp4`;

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video"
        >
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Component className="video">
                        <skoash.Video
                            ref="video"
                            src={src}
                        />
                    </skoash.Component>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
