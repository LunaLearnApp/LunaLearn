using Abp.Authorization;
using Abp.Runtime.Session;
using LunaLearn.Configuration.Dto;
using System.Threading.Tasks;

namespace LunaLearn.Configuration;

[AbpAuthorize]
public class ConfigurationAppService : LunaLearnAppServiceBase, IConfigurationAppService
{
    public async Task ChangeUiTheme(ChangeUiThemeInput input)
    {
        await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
    }
}
