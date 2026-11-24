import re, json, chompjs

BS = chr(92)

def grab(src, start, open_c, close_c):
    depth = 0; i = start; instr = None
    while True:
        c = src[i]
        if instr:
            if c == BS:
                i += 2; continue
            if c == instr:
                instr = None
        elif c in '"\'`':
            instr = c
        elif c == open_c:
            depth += 1
        elif c == close_c:
            depth -= 1
            if depth == 0:
                return src[start:i + 1]
        i += 1

src = open('js/data.js', encoding='utf-8').read()
out = {}
for m in re.finditer(r'^const (VOCAB_SESSION_(\d+)) = \[', src, re.M):
    out[int(m.group(2))] = chompjs.parse_js_object(grab(src, m.end() - 1, '[', ']'))
for k in sorted(out):
    print(k, len(out[k]), sorted(set().union(*[set(x.keys()) for x in out[k]])))
json.dump(out, open('tools/old_vocab.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

st = open('js/stories_and_topics.js', encoding='utf-8').read()
res = {}
for name in ['STORIES_DATA', 'SPARE_TOPICS_DATA']:
    m = re.search(r'^const ' + name + r' = \{', st, re.M)
    res[name] = chompjs.parse_js_object(grab(st, m.end() - 1, '{', '}'))
    for k, v in res[name].items():
        print(name, k, list(v.keys()))
json.dump(res, open('tools/old_stories_topics.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
