FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src
COPY ["src/LunaLearn.Web.Host/LunaLearn.Web.Host.csproj", "src/LunaLearn.Web.Host/"]
COPY ["src/LunaLearn.Web.Core/LunaLearn.Web.Core.csproj", "src/LunaLearn.Web.Core/"]
COPY ["src/LunaLearn.Application/LunaLearn.Application.csproj", "src/LunaLearn.Application/"]
COPY ["src/LunaLearn.Core/LunaLearn.Core.csproj", "src/LunaLearn.Core/"]
COPY ["src/LunaLearn.EntityFrameworkCore/LunaLearn.EntityFrameworkCore.csproj", "src/LunaLearn.EntityFrameworkCore/"]
WORKDIR "/src/src/LunaLearn.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/LunaLearn.Web.Host", "src/LunaLearn.Web.Host"]
COPY ["src/LunaLearn.Web.Core", "src/LunaLearn.Web.Core"]
COPY ["src/LunaLearn.Application", "src/LunaLearn.Application"]
COPY ["src/LunaLearn.Core", "src/LunaLearn.Core"]
COPY ["src/LunaLearn.EntityFrameworkCore", "src/LunaLearn.EntityFrameworkCore"]
WORKDIR "/src/src/LunaLearn.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "LunaLearn.Web.Host.dll"]
