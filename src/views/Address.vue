<template>
  <div class="content clear">
    <div class="account-wrapper">
        <div class="account-sidebar">
            <div class="avatar gray-box clear">
                <div class="js-account-sidebar-info">
                    <img src="http://static.smartisanos.cn/account/asset/img/default-user-avatar.png">
                </div>
                <div class="box-inner">
                    <ul class="account-nav"> 
                        <li class="current"><a href="javascript:;">我的订单</a></li> 
                        <li class=""><a href="javascript:;">收货地址</a></li> 
                    </ul>
                </div>
            </div>
        </div>
        <div class="account-content">
            <div class="account-address">
                <div class="gray-box clear">
                    <div class="title pre-title">
                        <h2 class="fn-left">收货信息</h2>
                        <span class="gray-blue-btn js-add-address"><a class="add">添加新地址</a></span>
                    </div>
                    <div class="box-inner clear">
                        <div class="address-list-item default-item" data-id="765532">
                            <div class="name fn-left">
                                <div class="name-cell">Yooye</div>
                            </div>
                            <div class="detail fn-left">
                                <div class="detail-cell">重庆市 市辖区 九龙坡歇台子双薪时代</div>
                            </div>
                            <div class="operation fn-right">
                                <div class="operation-cell">
                                    <a class="gray-edit-btn js-edit-address">修改</a>
                                    <span class="red-del-btn js-del-address"> <a>删除</a><em>删除</em> </span>
                                </div>
                            </div>
                            <div class="default fn-right">  （默认地址）  </div>
                            <div class="telephone fn-right">13912345678</div>
                        </div>
                        <div class="address-form clear" style="display: none;">
                            <div class="module-form-row">
                                <div class="form-item-v3">
                                    <i>收货人姓名</i>
                                    <input type="text" class="js-verify">
                                    <div class="verify-error"></div>
                                </div>
                            </div>
                            <div class="module-form-row">
                                <div class="form-item-v3">
                                    <i>手机号</i>
                                    <input type="text" class="js-verify">
                                    <div class="verify-error"></div>
                                </div>
                            </div>
                            <div class="module-form-row clear">
                                <div class="form-item-v3 area-code-w fn-left form-valid-item">
                                    <i>区号（可选）</i>
                                    <input type="text" class="js-verify js-address-area-code">
                                    <div class="verify-error"></div>
                                </div>
                                <div class="form-item-v3 telephone-w fn-right form-valid-item">
                                    <i>固定电话（可选）</i>
                                    <input type="text" class="js-verify js-address-telephone">
                                    <div class="verify-error"></div>
                                </div>
                            </div>
                            <div class="module-form-row clear">
                                <div class="form-item-v3 select-item province-wrapper">
                                    <select name="province_code" class="province select-province js-form-province js-verify"> 
                                        <option value="0">请选择省份</option>  <option value="110000">北京市</option>  
                                        <option value="440000">广东省</option>  <option value="310000">上海市</option>  
                                        <option value="320000">江苏省</option>  <option value="330000">浙江省</option>  
                                        <option value="370000">山东省</option>  <option value="410000">河南省</option>  
                                        <option value="510000">四川省</option>  <option value="130000">河北省</option>  
                                        <option value="420000">湖北省</option>  <option value="340000">安徽省</option>  
                                        <option value="350000">福建省</option>  
                                    </select>
                                </div>
                            </div>
                            <div class="module-form-row clear">
                                <div class="form-item-v3 select-item city-wrapper fn-left form-focus-item">
                                    <select class="city select-city js-form-city js-verify">
                                        <option value="0">请选择城市</option>
                                    </select>
                                </div>
                                <div class="form-item-v3 select-item district-wrapper fn-right form-focus-item">
                                    <select class="city select-city js-form-city js-verify">
                                        <option value="0">请选择区县</option>
                                        <option value="0">请选择区县</option>
                                    </select>
                                </div>
                            </div>
                            <div class="module-form-row">
                                <div class="form-item-v3">
                                    <i>详细地址，如街道名称，楼层，门牌号码等</i>
                                    <input type="text" class="js-verify">
                                    <div class="verify-error"></div>
                                </div>
                            </div>
                            <div class="module-form-row clear">
                                <input type="checkbox" name="default" class="hide" value="1" data-id="1">
                                <span class="blue-checkbox" data-checkbox-name="default"></span>设为默认
                            </div>
                            <div class="dialog-blue-btn big-main-btn disabled-btn js-verify-address"><a>保存</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
@import url('../assets/css/account.css');
@import url('../assets/css/address.css');
</style>