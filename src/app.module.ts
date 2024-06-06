import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FirstTestModule } from './first-module/first-test.module';
import { FirstTestResolver } from './first-resolver/first-test.resolver';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
// import { BreedModule } from './modules/breed.module';
// import { BreedService } from './services/breed.service';
import { HttpModule } from '@nestjs/axios';
// import { ApiModule } from './api/api.module';
// import { ApiService } from './api/api.service';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            playground: false,
            plugins: [ApolloServerPluginLandingPageLocalDefault()]
        }),
        HttpModule,
        FirstTestModule,
        //ApiModule,
        //BreedModule
    ],
    providers: [
        FirstTestResolver, 
        //ApiService
        //BreedService
    ]
})
export class AppModule {}