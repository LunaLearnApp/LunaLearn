using Abp.Application.Services;
using LunaLearn.Sessions.Dto;
using System.Threading.Tasks;

namespace LunaLearn.Sessions;

public interface ISessionAppService : IApplicationService
{
    Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
}
