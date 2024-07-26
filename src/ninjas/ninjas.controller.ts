import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
    
    // GET /ninjas --> []
    // GET /ninjas/:id --> { ... }
    // POST /ninjas
    // PUT /ninjas/:id --> { ... }
    // DELETE /ninjas/:id,
    
    @Get()
    getNinjas(@Query('type') type: string) {
        return[{ type }];
    }

    @Get(':id')
    getNinjaById(@Param('id') id: string){
        return { id };
    }

    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto){
        return {
            name: createNinjaDto.name
        };
    }

    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto){
        return {};
    }

    @Delete(':id')
    deleteNinja(@Param('id') id: string){
        return {};
    }

}
