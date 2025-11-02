using Abp.Application.Services;
using LunaLearn.MultiTenancy.Dto;

namespace LunaLearn.MultiTenancy;

public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
{
}

