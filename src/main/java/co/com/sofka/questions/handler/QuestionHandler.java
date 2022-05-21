package co.com.sofka.questions.handler;

import co.com.sofka.questions.model.PageDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.usecases.CountQuestion;
import co.com.sofka.questions.usecases.PaginationUseCase;
import co.com.sofka.questions.usecases.TotalPagesUseCase;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@Component
public class QuestionHandler {
    private final PaginationUseCase paginationUseCase;
    private final TotalPagesUseCase totalPagesUseCase;
    private final CountQuestion countQuestion;

    public QuestionHandler(PaginationUseCase paginationUseCase, TotalPagesUseCase totalPagesUseCase, CountQuestion countQuestion) {
        this.paginationUseCase = paginationUseCase;
        this.totalPagesUseCase = totalPagesUseCase;
        this.countQuestion = countQuestion;
    }

    public Mono<ServerResponse> paginable(ServerRequest request){

        return ServerResponse
                .ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromPublisher(paginationUseCase.apply(
                        new PageDTO(Integer.parseInt(request.pathVariable("page")))
                ), QuestionDTO.class));
    }

    public Mono<ServerResponse> totalPages(ServerRequest request){
        return ServerResponse
                .ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromPublisher(totalPagesUseCase.get(),Long.class));
    }

    public Mono<ServerResponse> countQuestions(ServerRequest request){
        return ServerResponse
                .ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromPublisher(countQuestion.get(),Long.class));
    }
}
