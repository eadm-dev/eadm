import { Column, Entity, Index, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {
    @Index()
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column('varchar', {
        length: 6,
        comment: 'プレフィクス/例: EM',
    })
    public prefix: string

    @Column('integer', {
        unique: true,
        comment: '管理id/例: 100001'
    })
    public itemId: number

    @Column('varchar', {
        nullable: true,
        comment: 'ジャンル/例: 電子機器'
    })
    public genre: string | null

    @Column('varchar', {
        nullable: true,
        comment: '種別/例: スマートフォン'
    })
    public type: string | null

    @Column('varchar', {
        nullable: true,
        length: 64,
        comment: 'メーカー/例: SHARP'
    })
    public maker: string | null

    @Column('varchar', {
        nullable: true,
        length: 128,
        comment: '名前/例: Aquos Sense3'
    })
    public name: string | null

    @Column('varchar', {
        nullable: true,
        comment: 'シリアルナンバー/例: eadm03213'
    })
    public serial: string | null

    @Column('varchar', {
        nullable: true,
        length: 64,
        comment: '型番/例: SHV45'
    })
    public model: string | null

    @Column('integer', {
        default: 0,// 不明
        comment: '状態/例: 運用中'
    })
    public status: TItemStatus

    @Column('integer', {
        default: 0,// 不明
        comment: '状態/例: 傷、汚れあり'
    })
    public viewStatus: TViewStatus

    // postgres
    /*
    @Column('char', {
        length: 10,
        nullable: true,
        comment: '購入日/例: 2020-04-30'
    })
    public buyDay: string | null
    */
}
