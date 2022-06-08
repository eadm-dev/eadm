import { Items } from "../../../model";
import { itemStatus, viewStatus } from "../../../sdk/code-to-text";

/**
 * 加工された item/list
 * 
 * @returns json
 */
export default async function() {
  // todo: 論理削除にしてフラグで引っかからないように
  const find = await Items.find()
  console.log(find)
  const json = JSON.parse(JSON.stringify(find));

  console.log(json)
  for(let i = 0; i < json.length; i++) {
    console.log(itemStatus.get(json[i].status))
    // 値を加工する
    // todo: 0 => 000
    json[i].itemId = `${json[i].prefix}-${json[i].itemId}`
    json[i].status = itemStatus.get(json[i].status)
    json[i].viewStatus = viewStatus.get(json[i].viewStatus)
    
    // nullは未定義にする
    const nullText = "未定義"
    if(!json[i].genre) json[i].genre = nullText
    if(!json[i].type) json[i].type = nullText
    if(!json[i].maker) json[i].maker = nullText
    if(!json[i].name) json[i].name = nullText
    if(!json[i].serial) json[i].serial = nullText
    if(!json[i].model) json[i].model = nullText
   
    // 使わないのは消す
    delete json[i].prefix
  }
  console.log(json)
  return json
}
