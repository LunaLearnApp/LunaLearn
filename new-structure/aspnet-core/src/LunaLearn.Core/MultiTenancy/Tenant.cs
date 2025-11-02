using Abp.MultiTenancy;
using LunaLearn.Authorization.Users;

namespace LunaLearn.MultiTenancy;

public class Tenant : AbpTenant<User>
{
    public Tenant()
    {
    }

    public Tenant(string tenancyName, string name)
        : base(tenancyName, name)
    {
    }
}
