type itemStatusText = string
type viewStatusText = string

/**
 * 運用の状態コードからテキストに変換するやつ
 * 
 * itemStatus.get('不明')
 */
export const itemStatusCode: ReadonlyMap<itemStatusText, TItemStatus> =
    new Map([
        ['不明', 0],
        ['運用中', 1],
        ['故障', 2]
    ])

/**
 * 見た目の状態コードからテキストに変換するやつ
 * 
 * viewStatus.get('不明')
 */
export const viewStatusCode: ReadonlyMap<TViewStatus, viewStatusText> =
    new Map([
        [0, '不明']
    ])
    
