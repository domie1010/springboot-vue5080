const base = {
    get() {
        return {
            url : "http://localhost:8080/shequwanggehuaguanlipingtai/",
            name: "shequwanggehuaguanlipingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shequwanggehuaguanlipingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区网格化管理平台"
        } 
    }
}
export default base
