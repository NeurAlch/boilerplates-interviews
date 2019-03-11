import * as React from "react";
import * as ReactDOM from "react-dom";
import { IAlbumPhoto } from "./types/IAlbumPhoto";

export class Album extends React.Component<{id: number; color: string; photos: IAlbumPhoto[];}, {}> {
    static displayName = "Album";
    render() {

        return (
            <div className={`mb-3 p-10 border rounded border-${this.props.color}`}>
                <h3 className="text-white mt-2">Album #{this.props.id}</h3>
                <ul className="list-reset pl-5">
                    {this.props.photos.map((photo: IAlbumPhoto, i) => {
                        return (
                            <li className="block mt-2 mb-2" key={`photo-${i}`}>
                                <h4 className={`mb-2 text-${this.props.color}`}>{photo.title}</h4>
                                <img src={photo.thumbnailUrl}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );

    }
}