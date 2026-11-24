"""Validate data JSON files against the content brief. Usage: python validate.py file.json [...]"""
import json, sys, re

LANGS = ["ar", "zh", "de", "es", "fr"]
BAD_DEF_WORDS = ["denoting", "pertaining", "manifest", "conscious", "exhibiting", "characterised", "characterized"]


def check_vocab(v, where, errs):
    for k in ["word", "pos", "level", "ipa", "def", "example"]:
        if not isinstance(v.get(k), str) or not v.get(k).strip():
            errs.append(f"{where}: missing '{k}'")
    d = v.get("def", "")
    if len(d.split()) > 18:
        errs.append(f"{where}: def too long ({len(d.split())} words): {d}")
    for b in BAD_DEF_WORDS:
        if b in d.lower():
            errs.append(f"{where}: def uses jargon '{b}'")
    tr = v.get("tr")
    if not isinstance(tr, dict):
        errs.append(f"{where}: missing tr")
        return
    for L in LANGS:
        t = tr.get(L)
        if not isinstance(t, dict) or not t.get("w") or not t.get("d"):
            errs.append(f"{where}: tr.{L} needs w and d")
    if tr.get("ar") and not re.search(r"[؀-ۿ]", tr["ar"].get("w", "")):
        errs.append(f"{where}: tr.ar.w is not Arabic")
    if tr.get("zh") and not re.search(r"[一-鿿]", tr["zh"].get("w", "")):
        errs.append(f"{where}: tr.zh.w is not Chinese")


def check_grammar(g, where, errs):
    for k in ["title", "explain", "explain_ar"]:
        if not g.get(k):
            errs.append(f"{where}: missing '{k}'")
    for k in ["form", "examples", "quiz"]:
        if not isinstance(g.get(k), list) or not g.get(k):
            errs.append(f"{where}: '{k}' must be a non-empty list")
    for i, q in enumerate(g.get("quiz", [])):
        opts = q.get("options", [])
        if not isinstance(q.get("answer"), int) or not (0 <= q["answer"] < len(opts)):
            errs.append(f"{where}.quiz[{i}]: bad answer index")


def check_file(path):
    errs = []
    try:
        data = json.load(open(path, encoding="utf-8"))
    except Exception as e:
        return [f"invalid JSON: {e}"]
    if "vocab" in data:  # session file
        for k in ["id", "title", "summary", "vocab", "grammar", "phrases"]:
            if k not in data:
                errs.append(f"missing top-level '{k}'")
        seen = set()
        for i, v in enumerate(data.get("vocab", [])):
            check_vocab(v, f"vocab[{i}] {v.get('word')}", errs)
            w = (v.get("word") or "").lower()
            if w in seen:
                errs.append(f"duplicate word {w}")
            seen.add(w)
        for i, g in enumerate(data.get("grammar", [])):
            check_grammar(g, f"grammar[{i}]", errs)
    else:  # extras file: { key: [vocab...] }
        for key, arr in data.items():
            for i, v in enumerate(arr):
                check_vocab(v, f"{key}[{i}] {v.get('word')}", errs)
    return errs


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    bad = 0
    for p in sys.argv[1:]:
        errs = check_file(p)
        print(f"{p}: {'OK' if not errs else str(len(errs)) + ' problem(s)'}")
        for e in errs[:60]:
            print("  -", e)
        bad += len(errs)
    sys.exit(1 if bad else 0)
