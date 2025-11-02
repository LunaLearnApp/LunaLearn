using Abp.Application.Services;
using LunaLearn.Authorization.Accounts.Dto;
using System.Threading.Tasks;

namespace LunaLearn.Authorization.Accounts;

public interface IAccountAppService : IApplicationService
{
    Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

    Task<RegisterOutput> Register(RegisterInput input);
}
