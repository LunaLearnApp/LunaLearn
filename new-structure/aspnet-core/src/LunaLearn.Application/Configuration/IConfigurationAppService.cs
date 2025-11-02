using LunaLearn.Configuration.Dto;
using System.Threading.Tasks;

namespace LunaLearn.Configuration;

public interface IConfigurationAppService
{
    Task ChangeUiTheme(ChangeUiThemeInput input);
}
