const app = new Vue({
    el : '#app',
    template : `
        <div id="content" class="content search_detail">
            <!-- 검색 바 -->
            <div id="searchbar" class="srchbar_wrap">
                <div class="srchbar input_txt">
                    <input type="search" title="검색어 입력" placeholder="검색어를 입력해주세요" class="srch_input" style="display: none;">
                    <div class="kwd_list" style="display:block;">
                        <div class="kwd_inner">
                            <span>
                                <em>스누피</em>
                            </span>
                        </div>
                    </div>
                    <button class="btn_del" style="display: none;"><i class="i_close"></i></button>
                    <button class="btn_add_kwd">이 안에서 검색</button>
                </div>
            </div>
            
            <!-- 대체 검색어 -->
            <p class="kwd_alter" style="display: none;">
                혹시,<em>스누피</em>찾으셨나요?
            </p>
            
            <!-- 연관 검색어 -->
            <div class="kwd_swiper swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><a>텀블러</a></div>
                    <div class="swiper-slide"><a>스누피 스티커</a></div>
                    <div class="swiper-slide"><a>스누피 텀블러</a></div>
                    <div class="swiper-slide"><a>스누피 파우치</a></div>
                </div>
            </div>
            
            <!-- 검색결과 구분 -->
            <div class="srch_cate">
                <ul>
                    <li>
                        <button type="button">전체<span class="cnt">42,121</span></button>
                    </li>
                    <li class="on">
                        <button type="button">상품<span class="cnt">2,157</span></button>
                    </li>
                    <li>
                        <button type="button">상품 후기<span class="cnt">39,925</span></button>
                    </li>
                    <li>
                        <button type="button">기획전<span class="cnt">38</span></button>
                    </li>
                    <li>
                        <button type="button" class="disabled">이벤트<span class="cnt">0</span></button>
                    </li>
                    <li>
                        <button type="button">브랜드<span class="cnt">1</span></button>
                    </li>
                </ul>
            </div>
            
            <!-- 정렬바 컴포넌트 (sortbar) -->
            <div class="sortbar">
                <div class="sort_l">
                    <button class="drpdown"><span>상품/인기순으로 보기</span><i class="i_arw_d2"></i></button>
                </div>
                <div class="sort_r">
                    <button class="btn_type2 btn_wht on">꼼꼼하게 찾기</button>
                    <p class="bbl_blk bbl_t"><i class="i_refresh2"></i>초기화 할까요?</p>
                </div>
            </div>
        
            <header class="head_type2">
                <h2 class="ttl">11건의 상품을<br>찾아냈어요!</h2>
            </header>
        
            <!-- 뷰 타입 탭 -->
            <div class="tab_view_type">
                <button type="button" class="btn_view_type active">
                    <i class="i_list_detail"></i>자세히
                </button>
                <button type="button" class="btn_view_type">
                    <i class="i_list_photo"></i>사진만
                </button>
            </div>
            
            <div class="prd_list type_basic">
                <article class="prd_item">
                    <figure class="prd_img">
                        <img src="http://thumbnail.10x10.co.kr/webimage/image/basic/313/B003132568.jpg?cmd=thumb&fit=true&ws=false&w=300&wh=300" alt="">
                        <span class="prd_mask"></span>
                    </figure>
                    <div class="prd_info">
                        <div class="prd_price">
                            <span class="set_price">37,050</span>
                            <span class="discount">5%</span>
                        </div>
                        <div class="prd_name">오토 손세정기_라이언</div>
                        <div class="prd_brand">카카오프렌즈</div>
                        <div class="prd_badge">
                            <span class="badge_type1">무료배송</span>
                            <span class="badge_type2">베스트셀러</span>
                        </div>
                        <div class="user_side">
                            <span class="user_eval">
                                <dfn>평점</dfn><i style="width: 84%;"></i>
                            </span>
                            <span class="user_comment">
                                <dfn>상품평</dfn>5
                            </span>
                        </div>
                    </div>
                    <a class="prd_link">
                        <span class="blind">상품 바로가기</span>
                    </a>
                    <button type="button" class="btn_wish">
                        <figure class="ico_wish"></figure>
                        <span class="cnt">1</span>
                    </button>
                </article>
            </div>
        </div>
    `,
    data() {return {

    }},
    created() {

    },
    methods : {

    }
});