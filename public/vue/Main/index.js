const app = new Vue({
    el : '#app',
    template : `
        <div>
            <div class="srchbar_wrap" style="position:inherit;">
                <div class="srchbar input_txt">
                    <input type="search" title="검색어 입력" placeholder="검색어를 입력해주세요" class="srch_input"
                        @input="input_search_keyword"
                        @keyup.enter="enter_search_keyword">
                    <button v-if="search_keyword" class="btn_del"><i class="i_close"></i></button>
                </div>
            </div>

            <!-- 자동완성 -->
            <div v-if="search_keyword" class="srch_kwd_list type3">
                <h2>혹시 이런걸 찾고 있나요?</h2>
                <ul>
                    <li><a><b>{{search_keyword}}</b></a></li>
                    <li><a><b>{{search_keyword}}</b>이어리</a></li>
                    <li><a><b>{{search_keyword}}</b>이어리스티커</a></li>
                    <li><a><b>{{search_keyword}}</b>이어트</a></li>
                </ul>
            </div>

            <!-- 최근 검색어 -->
            <div v-if="recent_keywords.length > 0" class="srch_kwd_list type1">
                <h2>최근 검색어</h2>
                <ul>
                    <li v-for="keyword in recent_keywords">
                        <a>{{keyword.keyword}}</a>
                    </li>
                </ul>
                <button class="btn_reset" @click="recent_keywords = [];">모두 지우기</button>
            </div>

            <!-- 인기검색어 -->
            <div v-if="best_keywords.totalCount" class="srch_kwd_list type2">
                <h2>많이 찾고 있어요 👀</h2>
                <ul>
                    <li v-for="bk in best_keywords.keywords">
                        <a>{{bk.keyword}}</a>
                        <span v-if="bk.tag.startsWith('+') && Number(bk.tag.substr(1)) > 100" class="label">hot</span>
                        <span v-if="bk.tag === 'new'" class="label">new</span>
                    </li>
                </ul>
            </div>
        </div>
    `,
    data() {return {
        search_keyword : '', // 검색어
        recent_keywords : [], // 최근 검색어 리스트
        best_keywords : {} // 인기검색어 리스트
    }},
    created() {
        this.get_recent_keywords(); // 최근 키워드 json데이터 가져오기
        this.get_best_keywords(); // 인기 검색어 json데이터 가져오기
    },
    methods : {
        /**
         * 검색어 입력 시 이벤트
         * data의 search_keyword와 input의 value를 연결
         * v-model은 한글바인딩이 바로바로 안되서 이런식으로 직접 넣어줌
         */
        input_search_keyword(e) {
            this.search_keyword = e.target.value;
        },
        /**
         * 검색어 입력창에서 엔터 입력 시 이벤트
         * recent_keywords 배열에 추가(처음으로)
         * ※ 빈 값이면 작동 안함
         */
        enter_search_keyword(e) {
            if( this.search_keyword.trim() !== '' ) { // 빈 문자열이 아닐 때만 unshift
                const keyword = this.search_keyword.trim();

                let is_have = false;
                this.recent_keywords.forEach(rk => {
                    is_have = is_have || (rk.keyword === keyword);
                });
                // 이미 최근 검색어에 있으면
                if( is_have ) {
                    this.recent_keywords = this.recent_keywords.filter(e => e.keyword !== keyword);
                    this.recent_keywords.unshift({'keyword' : this.search_keyword});
                // 없으면
                } else {
                    if( this.recent_keywords.length >= 4 ) { // 4개 이상이면 마지막꺼 날림
                        this.recent_keywords.pop();
                    }
                    this.recent_keywords.unshift({'keyword' : this.search_keyword});
                }
            }
            this.clear_search_keyword(e.target); // 검색어 초기화
        },
        /**
         * 검색어 초기화
         * input value, data의 search_keyword 모두 비워줌
         */
        clear_search_keyword(input) {
            input.value = '';
            this.search_keyword = '';
        },

        /**
         * 최근 키워드 json데이터 가져오기
         */
        get_recent_keywords() {
            const _this = this;
            $.ajax({
                url: '/public/json/recent_keywords.json',
                type: 'get',
                dataType : 'json',
                success: data => {
                    _this.recent_keywords = data;
                },
                error : e => console.log(e)
            });
        },

        /**
         * 인기 검색어 json데이터 가져오기
         */
        get_best_keywords() {
            const _this = this;
            $.ajax({
                url: '/public/json/best_keywords.json',
                type: 'get',
                dataType : 'json',
                success: data => {
                    _this.best_keywords = data;
                },
                error : e => console.log(e)
            });
        }
    }
});