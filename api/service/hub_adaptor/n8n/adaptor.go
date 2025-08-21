package n8n

import (
	"errors"
	"io"
	"net/http"

	"github.com/53AI/53AIHub/service/hub_adaptor/custom"
	"github.com/gin-gonic/gin"
	"github.com/songquanpeng/one-api/relay/meta"
	"github.com/songquanpeng/one-api/relay/model"
)

type Adaptor struct {
	meta         *meta.Meta
	CustomConfig *custom.CustomConfig
}

func (a *Adaptor) Init(meta *meta.Meta) {
	a.meta = meta
}

func (a *Adaptor) GetRequestURL(meta *meta.Meta) (string, error) {
	// n8n 只支持工作流模式，使用工作流适配器
	workflowAdaptor := &N8nWorkflowAdaptor{
		meta:         meta,
		CustomConfig: a.CustomConfig,
	}
	return workflowAdaptor.GetRequestURL(meta)
}

func (a *Adaptor) SetupRequestHeader(c *gin.Context, req *http.Request, meta *meta.Meta) error {
	// n8n 只支持工作流模式，使用工作流适配器
	workflowAdaptor := &N8nWorkflowAdaptor{
		meta:         meta,
		CustomConfig: a.CustomConfig,
	}
	return workflowAdaptor.SetupRequestHeader(c, req, meta)
}

func (a *Adaptor) ConvertRequest(c *gin.Context, relayMode int, request *model.GeneralOpenAIRequest) (any, error) {
	// n8n 主要用于工作流，不支持标准的聊天请求
	return nil, errors.New("n8n 适配器主要用于工作流，请使用 /v1/workflow/run 接口")
}

func (a *Adaptor) ConvertImageRequest(request *model.ImageRequest) (any, error) {
	return nil, errors.New("n8n 适配器不支持图像请求")
}

func (a *Adaptor) DoRequest(c *gin.Context, meta *meta.Meta, requestBody io.Reader) (*http.Response, error) {
	return custom.DoRequestHelper(a, c, meta, requestBody)
}

func (a *Adaptor) DoResponse(c *gin.Context, resp *http.Response, meta *meta.Meta) (usage *model.Usage, err *model.ErrorWithStatusCode) {
	// n8n 主要用于工作流，标准聊天响应处理暂不支持
	return nil, &model.ErrorWithStatusCode{
		Error: model.Error{
			Message: "n8n 适配器主要用于工作流，请使用 /v1/workflow/run 接口",
			Type:    "n8n_workflow_only",
		},
		StatusCode: http.StatusBadRequest,
	}
}

func (a *Adaptor) GetModelList() []string {
	return ModelList
}

func (a *Adaptor) GetChannelName() string {
	return "n8n"
}
