import { CameraCapturedPicture } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

const MEDIA_ALBUM_NAME = "Álbum Hello Kitty";

export type AssetType = MediaLibrary.Asset;
export type AlbumType = MediaLibrary.Album;

export async function getAlbum(): Promise<AlbumType> {
  return await MediaLibrary.getAlbumAsync(MEDIA_ALBUM_NAME);
}

export async function initAlbum(asset: AssetType): Promise<AlbumType> {
  return await MediaLibrary.createAlbumAsync(MEDIA_ALBUM_NAME, asset, false);
}

export async function createAsset(
  foto: CameraCapturedPicture,
  album?: AlbumType
): Promise<AssetType> {
  return await MediaLibrary.createAssetAsync(foto.uri, album);
}

export async function getFoto(fotoId: string): Promise<AssetType> {
  return await MediaLibrary.getAssetInfoAsync(fotoId);
}

export async function getLatestAsset(album: AlbumType): Promise<AssetType> {
  const albumAssets = await MediaLibrary.getAssetsAsync({
    album: album,
    sortBy: [[MediaLibrary.SortBy.creationTime, false]],
    first: 1,
  });
  return albumAssets.assets[0];
}

export async function saveFoto(foto: CameraCapturedPicture): Promise<AssetType> {
  let album = await getAlbum();

  if (album) return await createAsset(foto, album);

  const asset = await createAsset(foto);
  album = await initAlbum(asset);

  return getLatestAsset(album);
}
