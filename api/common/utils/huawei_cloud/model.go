package huawei_cloud

type HuaweicloudBaseResponse struct {
	ResultCode string `json:"resultCode"`
	ResultMsg  string `json:"resultMsg"`
}

type HuaweicloudCallbackRequest struct {
	Activity string `json:"activity"`
	TestFlag string `json:"testFlag"`
}

type HuaweicloudCallbackQuery struct {
	Signature string `form:"signature"`
	Timestamp int64  `form:"timestamp"`
	Nonce     string `form:"nonce"`
}

const (
	SUCCESS = "000000"
)

const (
	SUCCESS_MSG = "success"
)

type CreateInstanceResponse struct {
	HuaweicloudBaseResponse
	InstanceId string `json:"instanceId"`
}

func GetSuccess() HuaweicloudBaseResponse {
	return HuaweicloudBaseResponse{
		ResultCode: SUCCESS,
		ResultMsg:  SUCCESS_MSG,
	}
}

type HuaweiCloudBody struct {
	Activity    string `json:"activity"`
	BusinessId  string `json:"businessId"`
	OrderId     string `json:"orderId"`
	OrderLineId string `json:"orderLineId"`
	InstanceId  string `json:"instanceId"` // 查询实例信息时使用
	TestFlag    string `json:"testFlag"`

	// 更新实例相关字段
	Scene      string `json:"scene"`      // 场景：TRIAL_TO_FORMAL, RENEWAL, UNSUBSCRIBE_RENEWAL_PERIOD
	ProductId  string `json:"productId"`  // 产品标识
	ExpireTime string `json:"expireTime"` // 过期时间 yyyyMMddHHmmss

	// 更新实例状态相关字段
	Status string `json:"status"` // 状态：FROZEN, UNFROZEN

	// 升级实例相关字段
	NewProductId string `json:"newProductId"` // 新产品标识
}

// 查询实例信息响应结构
type QueryInstanceResponse struct {
	HuaweicloudBaseResponse
	Info []InstanceInfo `json:"info"`
}

type InstanceInfo struct {
	InstanceId string  `json:"instanceId"`
	AppInfo    AppInfo `json:"appInfo"`
}

type AppInfo struct {
	FrontEndUrl string `json:"frontEndUrl"` // 前台地址
	AdminUrl    string `json:"adminUrl"`    // 管理地址
	UserName    string `json:"userName"`    // 管理员账号
	Password    string `json:"password"`    // 管理员密码
	Memo        string `json:"memo"`        // 备注
}
