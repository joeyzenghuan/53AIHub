<div align="center">
  <a href="https://www.53ai.com/products/53AIHub"><img alt="Product Introduction" src="https://oss.ibos.cn/53ai/common/53AIHub_banner.png"></a>
</div>

<div align="center">
<a href="./README_EN.md"><img alt="README in English" src="https://img.shields.io/badge/English-d9d9d9"></a>
<a href="./README.md"><img alt="简体中文版自述文件" src="https://img.shields.io/badge/简体中文-d9d9d9"></a>
<a href="./README_JA.md"><img alt="日本語のREADME" src="https://img.shields.io/badge/日本語-d9d9d9"></a>
</div>

<div>
<a href="https://hub.53ai.com" target="_blank">Cloud Service</a> ·
<a href="https://docs.53ai.com/%E5%85%A5%E9%97%A8/%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2" target="_blank">Local Deployment</a> ·
<a href="https://docs.53ai.com/" target="_blank">Documentation</a> ·
<a href="https://aihub.53ai.com" target="_blank">Demo Site</a>
</div>

**53AIHub** is an open-source AI portal that enables zero-barrier publishing and operation of agents, prompts, and AI tools, allowing you to quickly build a production-ready AI portal. It seamlessly integrates with agent development platforms like ByteDance's Douzi, Tencent's Yuanqi, Dify, FastGPT, 53AI Studio, and MaaS platforms like Alibaba Bailian, Volcano Engine, and Baidu Qianfan.

Here are its core features: <br> <br>

**1. Platform Integration**:
Integration with mainstream agent development platforms, cloud computing platforms, and large model platforms.

**2. Application Management**:
Supports publishing, managing, grouping, sorting, and permission settings for agents, prompts, and AI tools.

**3. User Subscription**:
Configures different levels of subscription permissions and pricing.

**4. User Operations**:
Supports operations for both registered users and internal users, including managing and viewing login and usage records.

**5. Data Analysis**:
Supports data analysis from four dimensions: users, groups, departments, and platforms.

**6. Custom Domain**:
Supports binding custom domains after uploading HTTPS certificates.

**7. Custom Interface**:
Allows selection of site templates and styles with customizable interfaces.

## Feature Comparison

<table style="width:100%;">
  <tr>
    <th align="center">Feature</th>
    <th align="center">53AI Hub</th>
    <th align="center">NextChat</th>
    <th align="center">lobehub</th>
    <th align="center">Cherry Studio</th>
  </tr>
  <tr>
    <td align="center">Custom Interface</td>
    <td align="center">Multiple styles</td>
    <td align="center">Fixed style</td>
    <td align="center">Fixed style</td>
    <td align="center">Fixed style</td>
  </tr>
  <tr>
    <td align="center">Access Control</td>
    <td align="center">Enterprise-grade</td>
    <td align="center">None</td>
    <td align="center">None</td>
    <td align="center">None</td>
  </tr>
  <tr>
    <td align="center">Agent Integration</td>
    <td align="center">✅</td>
    <td align="center">❌</td>
    <td align="center">❌</td>
    <td align="center">❌</td>
  </tr>
  <tr>
    <td align="center">LLM Integration</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td align="center">Registered Users</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td align="center">Internal Users</td>
    <td align="center">✅</td>
    <td align="center">❌</td>
    <td align="center">❌</td>
    <td align="center">❌</td>
  </tr>
  <tr>
    <td align="center">SSO</td>
    <td align="center">WeCom, DingTalk, Feishu</td>
    <td align="center">❌</td>
    <td align="center">❌</td>
    <td align="center">❌</td>
  </tr>
  <tr>
    <td align="center">Local Deployment</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
</table>

## Using 53AI Hub

* **Cloud Service <br>**
  We provide [53AI Hub Cloud Service](https://hub.53ai.com) that users can apply for online. The cloud service includes Free, Standard, and Enterprise editions. The Enterprise edition offers all features of 53AI Hub, while the Free edition supports up to 10 agents and 100 registered users.
  
* **Community Edition<br>**
  Small and medium-sized enterprises and startups with fewer than 200 employees or annual revenue below 50 million RMB can use the Community Edition for free.
  Follow this [Getting Started Guide](https://docs.53ai.com/%E5%85%A5%E9%97%A8/%E6%AC%A2%E8%BF%8E%E4%BD%BF%E7%94%A8) to quickly deploy 53AI Hub on your own server.
  Refer to the [Documentation](https://docs.53ai.com) for more detailed information.
  
* **Private Custom Edition<br>**
  We offer an Enterprise Edition that supports private deployment and integration with WeCom, DingTalk, and Feishu organizational structures. For customized features, please email us at [hub@53ai.com](mailto:hub@53ai.com?subject=[GitHub]Commercial License) to discuss your enterprise needs. <br>

## Stay Ahead

Star 53AI Hub on GitHub to receive notifications about new version updates.

## Installing Community Edition

### System Requirements

Before installing 53AI Hub, ensure your server meets these minimum requirements:

* CPU >= 1 Core
* RAM >= 2 GiB

### Quick Start

The easiest way to start a 53AI Hub server is by running our [docker-compose.yml](docker/docker-compose.yaml) file. Before running the installation command, make sure you have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed:

```bash
cd docker
cp .env.example .env
docker compose up -d
```
After running, you can access http://localhost in your browser to enter the 53AI Hub admin panel and begin the initialization setup.

### Custom Configuration
For custom configurations, refer to the comments in the .env.example file, make a copy named .env, and update the corresponding values. You may also need to modify the docker-compose.yaml file itself according to your deployment environment and requirements, such as changing image versions, port mappings, or volume mounts. After making changes, rerun docker-compose up -d. The complete list of available environment variables can be found here.

### Contributing
For those who want to contribute code, please see Become a Contributor. We also encourage you to support 53AI Hub by sharing it on social media, events, and conferences.

### Community & Support

> We're looking for contributors to help translate 53AI Hub into languages other than Chinese and English. If you're interested, please contact us.


We welcome your contributions to improve 53AI, including: submitting code, issues, new ideas, or sharing interesting and useful AI applications you've built with 53AI. We also encourage you to share 53AI at various events, conferences, and on social media.

- Github Discussion👉: Share your applications and engage with the community.
- GitHub Issues👉: Report bugs and issues encountered while using 53AI Hub.
### Compliance Certifications
53AI has obtained the following certifications:

ISO/IEC 27001:2022 Certification
ISO 9001:2015

### Security Issues
To protect your privacy, please avoid posting security issues on GitHub. Send security-related questions to hub@53ai.com, and we'll provide detailed responses.

### License
This repository follows the [53AI Open Source License](./LICENSE), which is essentially Apache 2.0 with some additional restrictions.

