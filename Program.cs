using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication.Negotiate;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews(options => options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true).AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

//Windows auth
builder.Services.AddAuthentication(NegotiateDefaults.AuthenticationScheme).AddNegotiate();
builder.Services.AddAuthorization(options =>
{
    // By default, all incoming requests will be authorized according to the default policy.
    options.FallbackPolicy = options.DefaultPolicy;
});


//LoadConfigDbContext
builder.Services.AddDbContext<AppDbContext>(config =>
{
    config.UseSqlServer(builder.Configuration.GetConnectionString("connection_CotizacionesSC"), option => option.MigrationsAssembly("CotizacionesSC"));
    config.EnableSensitiveDataLogging();
});

//LoadConfigServices
string[] projects = new string[] { "BusinessLogic", "CrossCutting" };

foreach (string project in projects)
{
    List<Type> listImplementations = Assembly.Load(project).GetTypes().Where(B => B.Name.EndsWith("Service") && !B.IsInterface).ToList();

    foreach (Type implement in listImplementations)
    {
        Type? implentationInterface = implement.GetInterface("I" + implement.Name);

        if (implentationInterface != null)
        {
            builder.Services.AddScoped(implentationInterface, implement);
        }
        else
        {
            builder.Services.AddScoped(implement);
        }
    }
}

builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

var app = builder.Build();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
#if !DEBUG
app.UseAuthorization();
#endif

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
