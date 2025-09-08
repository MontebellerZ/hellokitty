import { CameraCapturedPicture } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Figurinha, loadFigurinhas } from "./figurinhas";
import { sortFigurinhasIds } from "./figurinhasIds";

const MEDIA_ALBUM_NAME = "Álbum Hello Kitty";

export type AssetType = MediaLibrary.Asset;
export type AlbumType = MediaLibrary.Album;

export class Foto {
  id: string;
  figurinha?: Figurinha;

  constructor(fotoId: string, figurinha: Figurinha | undefined = undefined) {
    this.id = fotoId;
    this.figurinha = figurinha;
  }

  async getAsset() {
    return await getFoto(this.id);
  }
}

let cachedFotos: Foto[] | null = null;

export function getRatio(width: number, height: number) {
  return width / height;
}

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

export function updateCacheFoto(figurinha: Figurinha, fotoId?: string) {
  const foto = fotoId ? new Foto(fotoId, figurinha) : undefined;

  if (!cachedFotos) {
    cachedFotos = foto ? [foto] : [];
    return [...cachedFotos];
  }

  const index = cachedFotos.findIndex((c) => c.figurinha?.id === figurinha.id);

  if (foto && index >= 0) {
    cachedFotos[index] = foto;
  } else if (!foto && index >= 0) {
    cachedFotos.splice(index, 1);
  } else if (foto) {
    cachedFotos.push(foto);
    sortFigurinhasIds(cachedFotos);
  }

  return [...cachedFotos];
}

export async function getAllFotos(reset = false) {
  if (cachedFotos && !reset) return cachedFotos;

  const figurinhas = await loadFigurinhas();
  const figsComFotos = figurinhas.filter((f) => f.foto).map((f) => new Foto(f.foto!, f));

  cachedFotos = figsComFotos;

  return [...cachedFotos];
}
