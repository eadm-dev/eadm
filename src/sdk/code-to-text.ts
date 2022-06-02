type itemStatusText = string
type viewStatusText = string

/**
 * 運用の状態コードからテキストに変換するやつ
 * 
 * itemStatus.get(0)
 */
export const itemStatus: ReadonlyMap<TItemStatus, itemStatusText> =
    new Map([
        [0, '不明'],
        [1, '運用中'],
        [2, '故障']
    ])

/**
 * 見た目の状態コードからテキストに変換するやつ
 * 
 * viewStatus.get(0)
 */
export const viewStatus: ReadonlyMap<TViewStatus, viewStatusText> =
    new Map([
        [0, '不明']
    ])
    
