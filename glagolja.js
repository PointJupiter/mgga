var letterMap = {
    a: 'ⰰ',
    b: 'ⰱ',
    c: 'ⱌ',
    'č': 'ⱍ',
    'ć': 'ⱋ',
    d: 'ⰴ',
    'đ': 'ⰼ',
    e: 'ⰵ',
    f: 'ⱇ',
    g: 'ⰳ',
    h: 'ⱈ',
    i: 'ⰻ',
    j: 'ⱓ',
    k: 'ⰽ',
    l: 'ⰾ',
    m: 'ⱞ',
    n: 'ⱀ',
    o: 'ⱁ',
    p: 'ⱂ',
    r: 'ⱃ',
    s: 'ⱄ',
    'š': 'ⱎ',
    t: 'ⱅ',
    u: 'ⱆ',
    v: 'ⰲ',
    z: 'ⰸ',
    'ž': 'ⰶ',
    A: 'Ⰰ',
    B: 'Ⰱ',
    C: 'Ⱌ',
    'Č': 'Ⱍ',
    'Ć': 'Ⱋ',
    D: 'Ⰴ',
    'Đ': 'Ⰼ',
    E: 'Ⰵ',
    F: 'Ⱇ',
    G: 'Ⰳ',
    H: 'Ⱈ',
    I: 'Ⰻ',
    J: 'Ⱓ',
    K: 'Ⰽ',
    L: 'Ⰾ',
    M: 'Ⱞ',
    N: 'Ⱀ',
    O: 'Ⱁ',
    P: 'Ⱂ',
    R: 'Ⱃ',
    S: 'Ⱄ',
    'Š': 'Ⱎ',
    T: 'Ⱅ',
    U: 'Ⱆ',
    V: 'Ⰲ',
    Z: 'Ⰸ',
    'Ž': 'Ⰶ'
}

function walkDom (node, fn) {
    var childNodesLen = node.childNodes.length
    for (let i = 0; i < childNodesLen; i++) {
        var childNode = node.childNodes[i]
        switch (childNode.nodeType) {
            case Node.TEXT_NODE:
                fn(childNode)
                break
            case Node.ELEMENT_NODE:
            case Node.DOCUMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
                walkDom(childNode, fn)
        }
    }
}

function glagolji (node) {
    node.nodeValue = node.nodeValue.replace(/./g, function (char) {
        return letterMap[char] ? letterMap[char] : char
    })
}

walkDom(document.getElementsByTagName('body')[0], glagolji)