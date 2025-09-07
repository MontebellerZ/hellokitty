import AsyncStorage from "@react-native-async-storage/async-storage";
import { FigurinhaIds, figurinhasIds } from "./figurinhasIds";

const FIGURINHAS_KEY = "figurinhasStorageKey";

export class Figurinha {
  id: FigurinhaIds;
  coletada: boolean = false;
  repetidas: number = 0;

  constructor(id: FigurinhaIds) {
    this.id = id;
  }

  clone(): Figurinha {
    const fig = new Figurinha(this.id);
    fig.coletada = this.coletada;
    fig.repetidas = this.repetidas;
    return fig;
  }

  static hardClone(original: Figurinha): Figurinha {
    const fig = new Figurinha(original.id);
    fig.coletada = original.coletada;
    fig.repetidas = original.repetidas;
    return fig;
  }
}

const defaultFigurinhas: Figurinha[] = figurinhasIds.map((id) => new Figurinha(id));
let cachedFigurinhas: Figurinha[] | null = null;

export function cloneFigurinhas(figurinhas: Figurinha[]) {
  return figurinhas.map((f) => f.clone?.() || Figurinha.hardClone(f));
}

function normalizarFigurinhas(figurinhas: Figurinha[]) {
  const mapFigurinhas = new Map<FigurinhaIds, Figurinha>();

  for (const fig of figurinhas) mapFigurinhas.set(fig.id, fig);

  return defaultFigurinhas.map((df) => mapFigurinhas.get(df.id) || df.clone());
}

async function resetCachedFigurinhas() {
  return saveFigurinhas(defaultFigurinhas);
}

export async function loadFigurinhas() {
  if (cachedFigurinhas) return cloneFigurinhas(cachedFigurinhas);

  try {
    const figsJson = await AsyncStorage.getItem(FIGURINHAS_KEY);
    if (!figsJson) return resetCachedFigurinhas();

    const figsArmazenadas: Figurinha[] = JSON.parse(figsJson);
    if (!Array.isArray(figsArmazenadas)) {
      throw new Error("As figurinhas armazenadas estão corrompidas");
    }

    const figurinhas = normalizarFigurinhas(figsArmazenadas);

    return saveFigurinhas(figurinhas);
  } catch (err) {
    console.error("Erro ao carregar figurinhas:", err);
    return resetCachedFigurinhas();
  }
}

export function saveFigurinhas(figurinhas: Figurinha[]) {
  cachedFigurinhas = cloneFigurinhas(figurinhas);
  const jsonFigs = JSON.stringify(cachedFigurinhas);
  AsyncStorage.setItem(FIGURINHAS_KEY, jsonFigs);
  return cloneFigurinhas(cachedFigurinhas);
}
