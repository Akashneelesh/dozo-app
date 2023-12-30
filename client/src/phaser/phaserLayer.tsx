import { useEffect, useState } from "react";
import { NetworkLayer } from "../dojo/createNetworkLayer";
import { LoadScene, MainScene, MenuScene } from "./scenes";

type Props = {
    networkLayer: NetworkLayer | null;
};

export const PhaserLayer = ({ networkLayer }: Props) => {
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        const config: Phaser.Types.Core.GameConfig = {
            width: 1280,
            height: 720,
            parent: "castle-hex",
            type: Phaser.AUTO,
            scene: [LoadScene, MenuScene, MainScene],
            backgroundColor: "0xded6b6",
            scale: {
                autoCenter: Phaser.Scale.CENTER_BOTH,
                mode: Phaser.Scale.FIT,
            },
            callbacks: {
                preBoot: (game) => {
                    game.registry.set("networkLayer", networkLayer);
                },
            },
        };

        const game = new Phaser.Game(config);
        game.events.on("gameIsReday", setReady);
        return () => {
            setReady(false);
            game.destroy(true);
        };
    }, []);
    if (!networkLayer) return null;

    return (
        <div
            id="castle-hex"
            className={isReady ? "visible" : "hidden"}
            className="w-full h-full"
        />
    );
};
