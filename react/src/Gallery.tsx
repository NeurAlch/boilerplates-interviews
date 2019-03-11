import axios from "axios";
import * as React from "react";
import { uniqBy } from "lodash";
import { Album } from "./Album";
import * as ReactDOM from "react-dom";
import { IAlbumPhoto } from "./types/IAlbumPhoto";

let DATA = undefined;

const getAlbums = async (): Promise<number[] | undefined> => {

    if (DATA === undefined) {

        const response = await axios.get("https://jsonplaceholder.typicode.com/photos");

        if (response && response.data) {

            DATA = response.data;

        } else {

            return undefined;

        }

    }

    const albums = uniqBy(DATA, (data: IAlbumPhoto) => data.albumId);

    return albums.slice(0, 3).map((obj: IAlbumPhoto) => obj.albumId);

}

const getPhotos = (album: number) => {

    if (DATA === undefined) {

        return [];

    }

    const photos = DATA.filter((data: IAlbumPhoto) => data.albumId === album);

    return photos.slice(0, 2);

}

export class Gallery extends React.Component<{}, {albums: number[], photos: IAlbumPhoto[]}> {
    static displayName = "Gallery";
    state = {
        albums: undefined,
        photos: undefined,
    };
    async componentDidMount() {

        const albums = await getAlbums();

        this.setState({
            albums,
        });

    }
    render() {

        console.log(this.state.albums);

        if (this.state.albums === undefined) {

            return (
                <React.Fragment>
                    <h2 className="text-white mt-2">Gallery</h2>
                    <p className="pt-3 pb-2 px-2 mt-5 bg-orange-dark text-white font-bold rounded uppercase">
                        No Albums Found Yet
                    </p>
                </React.Fragment>
            );

        }

        return (
            <React.Fragment>
                <h2 className="text-white mt-2 mb-5">Gallery</h2>
                {this.state.albums.map((album: number, i: number) => {

                    let color;

                    if (i === 0) {
                        color = "green";
                    } else if (i == 1) {
                        color = "blue";
                    } else if (i == 2) {
                        color = "purple";
                    }

                    return (<Album key={`album-${i}`} id={album} color={color} photos={getPhotos(album)} />);

                })}
            </React.Fragment>
        );

    }
}