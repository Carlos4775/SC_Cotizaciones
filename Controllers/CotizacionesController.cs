using BusinessLogic.Services.CommonService;
using BusinessLogic.Services.CotizacionesService;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using DataAccess.ViewModels;
using System.Text.Json;
using CrossCutting.Helpers;
using CrossCutting.ResourceParameters;

namespace CotizacionesSC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CotizacionesController : ControllerBase
    {
        private readonly ICotizacionesService _cotizacionesService;
        private readonly ICommonService _commonServices;
        private readonly IMapper _mapper;
        public CotizacionesController(
            ICotizacionesService cotizacionesService,
            ICommonService commonServices,
            IMapper mapper
            )
        {
            _cotizacionesService = cotizacionesService;
            _commonServices = commonServices;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<CotizacionesVM>>> GetListAsync([FromQuery] ResourceParameters paremeters)
        {
            PagedList<Cotizaciones> entityList = await _cotizacionesService.GetListAsync(paremeters);

            object paginationMetadata = new
            {
                totalCount = entityList.TotalCount,
                pageSize = entityList.PageSize,
                currentPage = entityList.CurrentPage,
                totalPages = entityList.TotalPages
            };

            Response.Headers.Add("X-Pagination", JsonSerializer.Serialize(paginationMetadata));

            return _mapper.Map<List<CotizacionesVM>>(entityList);
        }

        [HttpGet("{id}")]
        public async Task<CotizacionesResolveVM> GetAsync(int id)
        {
            CotizacionesResolveVM result = new()
            {
                Cotizacion = new CotizacionVM(),
                TipoRamos = await _commonServices.GetTipoRamos()
            };

            if (id == 0)
            {
                return result;
            }

            CotizacionVM entity = _mapper.Map<CotizacionVM>(await _cotizacionesService.GetById(id));

            result.Cotizacion = entity;

            return result;
        }

        [HttpPost]
        public async Task<ActionResult> PostAsync(CotizacionVM entity)
        {
            await _cotizacionesService.PostAsync(_mapper.Map<Cotizaciones>(entity));

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutAsync(int id, CotizacionVM data)
        {
            Cotizaciones? entity = await _cotizacionesService.GetById(id);

            await _cotizacionesService.PutAsync(_mapper.Map<Cotizaciones>(data), entity);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync(Cotizaciones entity)
        {
            await _cotizacionesService.DeleteAsync(entity);

            return NoContent();
        }
    }
}
