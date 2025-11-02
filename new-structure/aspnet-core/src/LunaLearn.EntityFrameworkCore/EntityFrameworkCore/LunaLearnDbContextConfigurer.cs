using Microsoft.EntityFrameworkCore;
using System.Data.Common;

namespace LunaLearn.EntityFrameworkCore;

public static class LunaLearnDbContextConfigurer
{
    public static void Configure(DbContextOptionsBuilder<LunaLearnDbContext> builder, string connectionString)
    {
        builder.UseSqlServer(connectionString);
    }

    public static void Configure(DbContextOptionsBuilder<LunaLearnDbContext> builder, DbConnection connection)
    {
        builder.UseSqlServer(connection);
    }
}
