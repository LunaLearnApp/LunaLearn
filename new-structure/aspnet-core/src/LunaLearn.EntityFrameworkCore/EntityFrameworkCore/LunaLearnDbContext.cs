using Abp.Zero.EntityFrameworkCore;
using LunaLearn.Authorization.Roles;
using LunaLearn.Authorization.Users;
using LunaLearn.MultiTenancy;
using Microsoft.EntityFrameworkCore;

namespace LunaLearn.EntityFrameworkCore;

public class LunaLearnDbContext : AbpZeroDbContext<Tenant, Role, User, LunaLearnDbContext>
{
    /* Define a DbSet for each entity of the application */

    public LunaLearnDbContext(DbContextOptions<LunaLearnDbContext> options)
        : base(options)
    {
    }
}
