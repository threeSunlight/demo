
/***储存数据  state*/
const state = {
    one: '实训三了',
    two: '别睡了',
    three: '高薪就业'
}


/**同步操作 修改state里面的值 */
const mutations = {
    /**修改第二个tab的值 */
    updateTwoTabName:(state, played="脚踏实地")=> {
        console.log(state);
        state.two = played
    },
    /**修改第三个标签的名称 */
    aeaitUpdateTwoTabName:(state, played) =>{
        state.two = played
    }
}


/**异步操作 actions */
const actions = {
    /**修改第三个tab标签的名字 */
    asyncUpdateThreeTabName:(context)=>{
        context.commit('aeaitUpdateTwoTabName', '学得快忘得也快')
    }
}


export default {
    namespaced: true,
    mutations,
    actions,
    state
}


